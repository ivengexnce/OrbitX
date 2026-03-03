<?php
include "db.php";

$fullName = $_POST['fullName'];
$email = $_POST['email'];
$password = $_POST['password'];

// Check if email exists
$check = $conn->prepare("SELECT * FROM users WHERE email=?");
$check->bind_param("s", $email);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    echo "<script>
            alert('User already exists. Please login.');
            window.location.href='auth.html';
          </script>";
} else {

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $fullName, $email, $hashedPassword);

    if ($stmt->execute()) {
        echo "<script>
                alert('Signup successful!');
                window.location.href='auth.html';
              </script>";
    } else {
        echo "Error occurred";
    }
}

$conn->close();
?>
