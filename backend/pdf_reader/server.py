from flask import Flask, jsonify
from flask_cors import CORS
from summarize_text import summary 
from pdf_reader import  extract_text_from_pdf

pdf_path = "./contagious_why_things_catch_on_jonah_be.pdf"
text = extract_text_from_pdf(pdf_path)

chunck_size = 3000
chunks = [text[i:i+chunck_size] for i in range (0, len(text), chunck_size)]

summarized_texts = []
for chunk in chunks:
    summarized = summary(chunk)
    summarized_texts.append(summarized)

app = Flask(__name__)
CORS(app)

@app.route("/text")
def get_text():
    """
    Returns a JSON object containing text data.
    """
    data = {
        "text": 
            summarized_texts
        
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
