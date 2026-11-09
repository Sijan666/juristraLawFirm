$content = [System.IO.File]::ReadAllText("C:\Users\CreativeIT\Desktop\Juristra\found_testi_build.txt")
$idx = $content.IndexOf("swiper slider")
if ($idx -ge 0) {
    Write-Output $content.Substring($idx, [Math]::Min(3000, $content.Length - $idx))
} else {
    $idx2 = $content.IndexOf("SwiperSlide")
    Write-Output $content.Substring($idx2 - 200, [Math]::Min(3000, $content.Length - $idx2 + 200))
}
