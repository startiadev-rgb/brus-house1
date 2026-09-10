Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\callo\.gemini\antigravity\brain\6a016515-2bfa-4bdb-8b71-a4f3f8a4610e\.user_uploaded"
$dstDir = "C:\Users\callo\.gemini\antigravity\scratch\cha-casa-nova\public\images"

# 1. Banheiro: Full photo
Copy-Item "$srcDir\media_1789002127356.jpg" "$dstDir\banheiro.jpg" -Force
Write-Host "Banheiro copied."

# Helper function to crop
function Crop-Image($file, $xRatio, $yRatio, $wRatio, $hRatio, $outputName) {
    $path = "$srcDir\$file"
    $img = [System.Drawing.Bitmap]::FromFile($path)
    
    $cropX = [int]($img.Width * $xRatio)
    $cropY = [int]($img.Height * $yRatio)
    $cropW = [int]($img.Width * $wRatio)
    $cropH = [int]($img.Height * $hRatio)

    $rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
    $cropped = $img.Clone($rect, $img.PixelFormat)
    
    $outPath = "$dstDir\$outputName"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    $img.Dispose()
    $cropped.Dispose()
    Write-Host "Cropped $outputName successfully ($cropW x $cropH)."
}

# 2. Cozinha: Extract central 3D render
Crop-Image "media_1789002134418.jpg" 0.255 0.008 0.525 0.710 "cozinha.jpg"

# 3. Sala 1 (Rack Vermelho): Extract central 3D render
Crop-Image "media_1789002143288.jpg" 0.180 0.012 0.625 0.635 "sala1.jpg"

# 4. Sala 2 (Sofá Linho): Extract central 3D render
Crop-Image "media_1789002149692.jpg" 0.198 0.012 0.585 0.635 "sala2.jpg"
