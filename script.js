//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyBookList</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>MyBookList</h1>
        <div class="form-group">
            <input type="text" id="title" placeholder="Title" class="form-control mb-2">
            <input type="text" id="author" placeholder="Author" class="form-control mb-2">
            <input type="text" id="isbn" placeholder="ISBN#" class="form-control mb-2">
            <button id="submit" class="btn btn-primary">Submit</button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN#</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="book-list">
                <!-- Rows will be added here dynamically -->
            </tbody>
        </table>
    </div>

    <script src="script.js"></script>
</body>
</html>

