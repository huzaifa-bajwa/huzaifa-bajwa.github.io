const autoComplete = ({
  root,
  renderOption,
  inputValue,
  fetchData,
  onOptionSelect,
}) => {
  root.innerHTML = `
        <label><b>Search</b></label>
        <input class="input"></input>
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `;

  const onInput = async (e) => {
    const items = await fetchData(e.target.value);
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let item of items) {
      const anchor = document.createElement("a");

      anchor.classList.add("dropdown-item");
      anchor.innerHTML = renderOption(item);

      anchor.addEventListener("click", (e) => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });

      resultsWrapper.appendChild(anchor);
    }
  };

  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");
  const input = root.querySelector("input");

  input.addEventListener("input", debounce(onInput, 1000));

  document.addEventListener("click", (e) => {
    if (!root.contains(e.target)) dropdown.classList.remove("is-active");
  });
};
