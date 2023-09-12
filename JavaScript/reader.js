const bookInput = document.getElementById('book-input');
        const viewButton = document.getElementById('view-button');
        const viewer = document.getElementById('viewer');

        viewButton.addEventListener('click', () => {
            const file = bookInput.files[0];
            if (file) {
                if (file.type === 'application/pdf' || file.type === 'application/epub+zip') {
                    viewBook(file);
                } else {
                    alert('Invalid file format. Please select a PDF or EPUB file.');
                }
            } else {
                alert('Please select a file to view.');
            }
        });

        function viewBook(file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const data = e.target.result;

                // For PDF files, you can use a PDF viewer library like pdf.js
                if (file.type === 'application/pdf') {
                    viewer.innerHTML = `
                        <embed src="${data}" type="application/pdf" width="100%" height="100%">
                    `;
                }

                // For EPUB files, you can use a library like EPUB.js
                if (file.type === 'application/epub+zip') {
                    // Replace this with EPUB.js initialization code
                    viewer.innerHTML = `
                        <p>EPUB viewer code goes here</p>
                    `;
                }
            };

            reader.readAsDataURL(file);
        }