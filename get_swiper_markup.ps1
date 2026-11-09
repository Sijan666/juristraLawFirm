$content = [System.IO.File]::ReadAllText("C:\Users\CreativeIT\Desktop\Juristra\found_testi_build.txt")
$idx = $content.IndexOf("jsxDEV(Swiper")
if ($idx -lt 0) { $idx = $content.IndexOf("Swiper") }
Write-Output $content.Substring($idx, [Math]::Min(5000, $content.Length - $idx))
