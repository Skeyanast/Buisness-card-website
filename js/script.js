let selected;
table = document.querySelector('table')
 
table.onmouseover = function(event) {
  let target = event.target;
  if (target.tagName === 'TD') {
	highlight(target);
	return;
  }
};
 
function highlight(td) {
  if (selected) {
    selected.classList.remove('colored');
  }
  selected = td;
  selected.classList.add('colored');
}