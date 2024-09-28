function createTable() {
        // Get number of rows from the user
        let rows = prompt("Input number of rows", 1);
        // Get number of columns from the user
        let cols = prompt("Input number of columns", 1);

        // Reference to the table
        let table = document.getElementById("myTable");

        // Clear the table content before creating a new one
        table.innerHTML = "";

        // Loop through the number of rows
        for (let i = 0; i < rows; i++) {
          // Create a new row
          let row = table.insertRow(i);

          // Loop through the number of columns
          for (let j = 0; j < cols; j++) {
            // Create a new cell
            let cell = row.insertCell(j);

            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
          }
        }
      }