// Write your code here!


// 1) no longer has DOM node 'main#main

main.remove();
// main.removeParent(main#main)


//2) has a 'newHeader' variable that points to node 'h1#victory'


const newHeader = document.createElement('h1');

// 3) has a 'newHeader' variable that points to node 'h1#victory'


newHeader.id = 'victory'

//has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside:
newHeader.innerHTML = 'Patricia is the champion';

