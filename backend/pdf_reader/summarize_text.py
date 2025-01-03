from transformers import pipeline

def summary(text):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    


    # Calculate input length and set max_length dynamically
    input_length = len(text.split())  # Approximate token count using word count
    max_length = min(input_length // 2, 512)  # Half the input length, capped at 512 tokens
    min_length = max(50, max_length // 3)     # Ensure a reasonable minimum length

    # Generate summary
    summary = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
    return summary[0]['summary_text']
