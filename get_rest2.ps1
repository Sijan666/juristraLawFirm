$content = [System.IO.File]::ReadAllText("C:\Users\CreativeIT\Desktop\Juristra\found_testi_build.txt")
$idx = $content.IndexOf("text-[26px] font-medium text-[#611422]")
Write-Output $content.Substring($idx, [Math]::Min(3000, $content.Length - $idx))
