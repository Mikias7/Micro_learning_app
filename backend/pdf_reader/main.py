from summarize_text import summary 
from pdf_reader import  extract_text_from_pdf


pdf_path = "./contagious_why_things_catch_on_jonah_be.pdf"
text = extract_text_from_pdf(pdf_path)

chunck_size = 3000
chunks = [text[i:i+chunck_size] for i in range (0, len(text), chunck_size)]

for i in chunks:
    summarized_text = summary(i)
    print(summarized_text)

@app.route("/text")
def get_text():
    """
    Returns a JSON object containing text data.
    """
    data = {
        "text": [
            summarized_text
        ]
    }
    return jsonify(data)