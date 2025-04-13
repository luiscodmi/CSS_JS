function marcar() {
  var checkboxes = document.querySelectorAll('#option-checks input[type="checkbox"]');
  var checkAll = document.getElementById("estos");

  for (index = 0; index < checkboxes.length; index++) {
    checkboxes[index].checked = checkAll.checked;
  }
}
