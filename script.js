const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableHeadRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  const nama = data.get('nama');
  const nim = data.get('nis');
  const hp = data.get('hp');
  const mapel = data.get('mapel')

  const headers = ['Nama', 'NIS', 'mapel', 'Nomor HP'];
  const values = [nama, nim, mapel, hp];

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    const value = values[i];

    const tableHeadCell = document.createElement('th');
    const tableBodyRow = document.createElement('tr');
    const tableBodyHeader = document.createElement('td');
    const tableBodyValue = document.createElement('td');

    tableHeadCell.textContent = header;
    tableBodyHeader.textContent = header;
    tableBodyValue.textContent = value;

    tableHeadRow.appendChild(tableHeadCell);
    tableBodyRow.appendChild(tableBodyHeader);
    tableBodyRow.appendChild(tableBodyValue);

    tableHead.appendChild(tableHeadRow);
    tableBody.appendChild(tableBodyRow);
  }

  table.appendChild(tableHead);
  table.appendChild(tableBody);
  
  result.innerHTML = '';
  result.appendChild(table);
  
  form.reset();
  });