import argparse
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.llms import Ollama
from langchain_core.prompts import ChatPromptTemplate
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CHROMA_PATH = os.path.join(BASE_DIR, "chroma")

CHAT_TEMPLATE = """You are a friendly concierge at Cloudy Hill Cottage in Ella, Sri Lanka. Answer the guest's question naturally and professionally,
as if you work at the hotel and have this knowledge. Do NOT mention "context", "according to the information", or "based on".
Just answer directly and conversationally like a real hotel staff member would.

Hotel Information:
{context}

Guest's Question: {question}

Your response (speak naturally as hotel staff):"""


def main():
    print("\n" + "="*60)
    print("    CLOUDY HILL COTTAGE - CHATBOT ASSISTANT")
    print("="*60)
    print("\nWelcome! I'm your hotel concierge assistant.")
    print("Ask me anything about Cloudy Hill Cottage.")
    print("Type 'quit' or 'exit' to end the conversation.\n")
    
    # Prepare the DB
    embedding_function = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embedding_function)
    
    # Initialize the model
    model = Ollama(model="llama2")
    
    # Chat loop
    while True:
        try:
            user_input = input("\n👤 You: ").strip()
            
            if not user_input:
                continue
                
            if user_input.lower() in ['quit', 'exit', 'bye', 'goodbye']:
                print("\n🏨 Assistant: Thank you for choosing Cloudy Hill Cottage! Have a great day!")
                break
            
            # Search the DB (using regular similarity search to avoid score warnings)
            results = db.similarity_search(user_input, k=3)
            
            if len(results) == 0:
                print("\n🏨 Assistant: I couldn't find relevant information about that. Please contact Cloudy Hill Cottage at +94 77 123 4567 for more help.")
                continue
            
            # Get context from results
            context_text = "\n\n---\n\n".join([doc.page_content for doc in results])
            
            # Create prompt
            prompt_template = ChatPromptTemplate.from_template(CHAT_TEMPLATE)
            prompt = prompt_template.format(context=context_text, question=user_input)
            
            # Get response from LLM
            print("\n🏨 Assistant: ", end="", flush=True)
            response_text = model.invoke(prompt)
            print(response_text)
            
        except KeyboardInterrupt:
            print("\n\n🏨 Assistant: Thank you for using our chat service! Goodbye!")
            break
        except Exception as e:
            print(f"\n⚠️  Error: {str(e)}")
            print("Please try again or contact the front desk.")


if __name__ == "__main__":
    main()
