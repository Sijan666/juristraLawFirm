$files = Get-ChildItem -Path "C:\Users\CreativeIT\Desktop\Juristra\.next" -Recurse -Filter "*Testimonials*.js"
foreach ($f in $files) {
    Write-Output "File: $($f.FullName)"
    $content = [System.IO.File]::ReadAllText($f.FullName)
    if ($content -match "Kathryn Murphy") {
        Write-Output "Found in $($f.Name), length: $($content.Length)"
        [System.IO.File]::WriteAllText("C:\Users\CreativeIT\Desktop\Juristra\found_testi_build.txt", $content)
        break
    }
}
