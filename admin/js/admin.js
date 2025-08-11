// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }
  
  // Open modal
  function openEditModal(name, role, email) {
    document.getElementById('editName').value = name;
    document.getElementById('editRole').value = role;
    document.getElementById('editEmail').value = email;
    document.getElementById('editModal').style.display = "block";
  }
  
  // Close modal
  function closeEditModal() {
    document.getElementById('editModal').style.display = "none";
  }
  
  // Show message after form submit
function showMessage() {
    const name = document.getElementById("name").value;
    document.getElementById("formMessage").textContent = `✅ User "${name}" added successfully!`;
  }
  
  // Live filter function
document.getElementById("searchInput").addEventListener("input", filterUsers);
document.getElementById("roleFilter").addEventListener("change", filterUsers);

function filterUsers() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const role = document.getElementById("roleFilter").value;
  const rows = document.querySelectorAll("#userTable tbody tr");

  rows.forEach(row => {
    const name = row.cells[1].textContent.toLowerCase();
    const email = row.cells[3].textContent.toLowerCase();
    const userRole = row.getAttribute("data-role");

    const matchSearch = name.includes(search) || email.includes(search);
    const matchRole = !role || role === userRole;

    if (matchSearch && matchRole) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}
