let customers = [];

// Add Customer
function addCustomer() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const status = document.getElementById("status").value;

    if (!name || !email || !status) {
        alert("Please fill all fields");
        return;
    }

    customers.push({
        id: Date.now(),
        name,
        email,
        status
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("status").value = "";

    displayCustomers();
}

// Display Customers
function displayCustomers() {

    const customerList =
        document.getElementById("customerList");

    customerList.innerHTML = "";

    customers.forEach(customer => {

        customerList.innerHTML += `
            <div class="customer-card">
                <h3>${customer.name}</h3>

                <p>
                    Email: ${customer.email}
                </p>

                <p>
                    Status: ${customer.status}
                </p>

                <button onclick="updateStatus(${customer.id})">
                    Update Status
                </button>

                <button onclick="deleteCustomer(${customer.id})">
                    Delete
                </button>
            </div>
        `;
    });
}

// Update Status
function updateStatus(id) {

    const customer =
        customers.find(c => c.id === id);

    if (customer) {

        const newStatus = prompt(
            "Enter New Status:",
            customer.status
        );

        if (newStatus) {
            customer.status = newStatus;
        }

        displayCustomers();
    }
}

// Delete Customer
function deleteCustomer(id) {

    customers =
        customers.filter(
            customer => customer.id !== id
        );

    displayCustomers();
}

// Search Customer
function searchCustomer() {

    const keyword =
        document.getElementById("search")
        .value
        .toLowerCase();

    const filtered =
        customers.filter(customer =>
            customer.name
            .toLowerCase()
            .includes(keyword)
        );

    const customerList =
        document.getElementById("customerList");

    customerList.innerHTML = "";

    filtered.forEach(customer => {

        customerList.innerHTML += `
            <div class="customer-card">
                <h3>${customer.name}</h3>

                <p>Email: ${customer.email}</p>

                <p>Status: ${customer.status}</p>
            </div>
        `;
    });
} 