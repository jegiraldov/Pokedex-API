const showElements = (elements, container) => {
  container.innerHTML = "";
  elements.slice(0, 10).forEach((element) => {
    container.innerHTML += `
        <li data-value="${element.name}" class="upper" >${element.name}</li>
        `;
  });
};

export default showElements;
