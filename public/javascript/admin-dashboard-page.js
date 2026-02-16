// ----------------- Create a product ----------------- //
const createProductFormContainer = document.getElementById(
  "create-product-form-container"
);

// Open Form
const createProductFormOpenBtn = document.getElementById(
  "create-product-form-open-btn"
);
createProductFormOpenBtn.addEventListener("click", () => {
  createProductFormContainer.style.display = "block";
});

// Close Form
const createProductFormCloseBtn = document.getElementById(
  "create-product-form-close-btn"
);
createProductFormCloseBtn.addEventListener("click", () => {
  createProductFormContainer.style.display = "none";
});

// Submit Form
const createProductForm = document.getElementById("create-product-form");
const createProductFormErrorElement = document.getElementById(
  "create-product-form-error-element"
);
createProductForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  createProductFormErrorElement.innerText = "";
  const formData = new FormData(createProductForm);
  try {
    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: {
        // "Content-Type": ""
        Accept: "application/json",
      },
      body: formData,
    });
    const data = await res.json();
    if (!res.ok)
      return (createProductFormErrorElement.innerText = data.message);
    alert(data.message);
  } catch (err) {
    alert(err.message);
  }
});
// ----------------- Create a product ----------------- //

// ----------------- Update a product ----------------- //
// Open Form
const updateProductFormOpenBtns = document.querySelectorAll(
  ".update-product-form-open-btn"
);
updateProductFormOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const updateProductFormContainer = btn.nextElementSibling; // assumes form container is right after button
    updateProductFormContainer.style.display = "block";
  });
});

// Close Form
document
  .querySelectorAll(".update-product-form-container button[type='button']")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".update-product-form-container").style.display = "none";
    });
  });

// Submit Form
const updateProductForms = document.querySelectorAll(".update-product-form");
// const updateProductFormErrorElement = document.getElementById(
//   "update-product-form-error-element"
// );
updateProductForms.forEach((curForm) => {
  curForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    // updateProductFormErrorElement.innerText = "";
    const productId = curForm.dataset.productId;
    const formData = new FormData(curForm);
    try {
      const res = await fetch(`/api/admin/products/${productId}`, {
        method: "PUT",
        headers: {
          // "Content-Type": ""
          Accept: "application/json",
        },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok)
        return (updateProductFormErrorElement.innerText = data.message);
      alert(data.message);
    } catch (err) {
      alert(err.message);
    }
  });
});
// ----------------- Update a product ----------------- //

// ----------------- Delete a product ----------------- //
const deleteProductBtns = document.querySelectorAll(".delete-product-btn");

deleteProductBtns.forEach((curBtn) => {
  const productId = curBtn.dataset.productId;
  curBtn.addEventListener("click", async () => {
    try {
      await fetch(`/api/admin/products/${productId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });
      alert(data.message);
    } catch (error) {
      alert(err.message);
    }
  });
});
// ----------------- Delete a product ----------------- //
