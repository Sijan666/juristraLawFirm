$content = [System.IO.File]::ReadAllText("C:\Users\CreativeIT\Desktop\Juristra\found_testi_build.txt")
$idx = $content.IndexOf("leading-[1.7] text-gray-600 pr-2")
Write-Output $content.Substring($idx, [Math]::Min(3000, $content.Length - $idx))
