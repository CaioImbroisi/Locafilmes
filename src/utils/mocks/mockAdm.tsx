function mockAdm() {
    const adminData = {
        admin: true,
        name: "admin",
        cep: "00000000",
        state: "adminLand",
        street: "golden admin street",
        number: "99",
        phone: "admin",
        email: "admin@admin.com",
        password: "123admin",
    }
    localStorage.setItem(String(adminData.phone), JSON.stringify(adminData))
}

export {mockAdm}