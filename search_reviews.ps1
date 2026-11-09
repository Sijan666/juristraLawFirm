$content = [System.IO.File]::ReadAllText("C:\Users\CreativeIT\Desktop\Juristra\found_testi_build.txt")
$idx = $content.IndexOf("REVIEWS")
if ($idx -ge 0) {
    Write-Output $content.Substring($idx, [Math]::Min(3000, $content.Length - $idx))
} else {
    Write-Output "REVIEWS not found"
}
