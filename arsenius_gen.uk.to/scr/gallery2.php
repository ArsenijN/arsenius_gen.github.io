<!--?php
$dir = '/res/img/';
$images = scandir($dir);

$imageData = array();

foreach ($images as $image) {
    if (!in_array($image, array(".", ".."))) {
        $imagePath = $dir . '/' . $image;
        $exif = exif_read_data($imagePath);
        $title = isset($exif['Title']) ? $exif['Title'] : 'No title';
        $imageData[] = array(
            'src' => $imagePath,
            'title' => $title
        );
    }
}

echo json_encode($imageData);
?>

<?php
$dir = 'res/img/';
$images = scandir($dir);

$imageData = array();

foreach ($images as $image) {
    if (!in_array($image, array(".", ".."))) {
        $imagePath = $dir . '/' . $image;
        $exif = exif_read_data($imagePath);
        $title = isset($exif['Title']) ? $exif['Title'] : 'No title';
        $imageData[] = array(
            'src' => $imagePath,
            'title' => $title
        );
    }
}

header('Content-Type: application/json');
echo json_encode($imageData);
?>
