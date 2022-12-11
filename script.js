function clickTab(idTab) {
    let desc = document.getElementsByClassName('tab-desc');

    for (let i = 0; i < desc.length; i++) {
        desc[i].style.display = 'none';
    }

    document.getElementById(idTab).style.display = 'block';
}





