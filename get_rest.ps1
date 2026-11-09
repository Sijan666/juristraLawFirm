$content = [System.IO.File]::ReadAllText("C:\Users\CreativeIT\Desktop\Juristra\found_testi_build.txt")
$idx = $content.IndexOf("flex flex-col sm:flex-row gap-8 bg-white h-full")
Write-Output $content.Substring($idx, [Math]::Min(3500, $content.Length - $idx))
