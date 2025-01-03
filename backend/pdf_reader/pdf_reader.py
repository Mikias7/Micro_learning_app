import pymupdf as fitz
  # PyMuPDF

def extract_text_from_pdf(pdf_path):
    # Open the PDF file
    doc = fitz.open(pdf_path)

    # Get the total number of pages
    total_pages = doc.page_count
    
    text = ""
    
    # Iterate through each page in the PDF
    for i in range(10,15):
        page = doc.load_page(i)  # Load each page
        text += page.get_text()  # Extract text from the page
    
    return text

