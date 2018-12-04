function generate() {
    var html = '';
    for(i=1; i<=imageCount; i++) {
        html += '<input type="image" id="img' + i + '" src="' + folder + '/img' + i + '.jpg" alt="image selection button">';
    }
    $('#imgselect').append(html);
}
