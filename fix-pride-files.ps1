# Script to copy JB's Pride images and video once downloads complete
# Run this script after downloads finish (no .crdownload extension)

$downloadsPath = "C:\Users\bheemesh\Downloads"
$destPath = "C:\Users\bheemesh\Karthikeya-Constructions-1\public\images"

Write-Host "Checking and copying JB's Pride files...`n" -ForegroundColor Cyan

# Image 1 - First image (1.07.45 PM.jpeg)
$src1 = Join-Path $downloadsPath "WhatsApp Image 2025-11-20 at 1.07.45 PM.jpeg"
$dest1 = Join-Path $destPath "pride-1.jpeg"

if (Test-Path $src1) {
    Copy-Item $src1 -Destination $dest1 -Force
    $size = (Get-Item $src1).Length
    Write-Host "[OK] Copied pride-1.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src1.crdownload") {
    Write-Host "[WAIT] Image 1 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 1 not found" -ForegroundColor Red
}

# Image 2 - Second image (1.07.45 PM (1).jpeg)
$src2 = Join-Path $downloadsPath "WhatsApp Image 2025-11-20 at 1.07.45 PM (1).jpeg"
$dest2 = Join-Path $destPath "pride-2.jpeg"

if (Test-Path $src2) {
    Copy-Item $src2 -Destination $dest2 -Force
    $size = (Get-Item $src2).Length
    Write-Host "[OK] Copied pride-2.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src2.crdownload") {
    Write-Host "[WAIT] Image 2 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 2 not found" -ForegroundColor Red
}

# Image 3 - (1.07.46 PM.jpeg)
$src3 = Join-Path $downloadsPath "WhatsApp Image 2025-11-20 at 1.07.46 PM.jpeg"
$dest3 = Join-Path $destPath "pride-3.jpeg"

if (Test-Path $src3) {
    Copy-Item $src3 -Destination $dest3 -Force
    $size = (Get-Item $src3).Length
    Write-Host "[OK] Copied pride-3.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src3.crdownload") {
    Write-Host "[WAIT] Image 3 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 3 not found" -ForegroundColor Red
}

# Image 4 - (1.07.46 PM (1).jpeg)
$src4 = Join-Path $downloadsPath "WhatsApp Image 2025-11-20 at 1.07.46 PM (1).jpeg"
$dest4 = Join-Path $destPath "pride-4.jpeg"

if (Test-Path $src4) {
    Copy-Item $src4 -Destination $dest4 -Force
    $size = (Get-Item $src4).Length
    Write-Host "[OK] Copied pride-4.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src4.crdownload") {
    Write-Host "[WAIT] Image 4 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 4 not found" -ForegroundColor Red
}

# Image 5 - (1.07.46 PM (2).jpeg)
$src5 = Join-Path $downloadsPath "WhatsApp Image 2025-11-20 at 1.07.46 PM (2).jpeg"
$dest5 = Join-Path $destPath "pride-5.jpeg"

if (Test-Path $src5) {
    Copy-Item $src5 -Destination $dest5 -Force
    $size = (Get-Item $src5).Length
    Write-Host "[OK] Copied pride-5.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src5.crdownload") {
    Write-Host "[WAIT] Image 5 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 5 not found" -ForegroundColor Red
}

# Image 6 - (1.07.47 PM.jpeg)
$src6 = Join-Path $downloadsPath "WhatsApp Image 2025-11-20 at 1.07.47 PM.jpeg"
$dest6 = Join-Path $destPath "pride-6.jpeg"

if (Test-Path $src6) {
    Copy-Item $src6 -Destination $dest6 -Force
    $size = (Get-Item $src6).Length
    Write-Host "[OK] Copied pride-6.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src6.crdownload") {
    Write-Host "[WAIT] Image 6 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 6 not found" -ForegroundColor Red
}

# Image 7 - (1.12.06 PM.jpeg)
$src7 = Join-Path $downloadsPath "WhatsApp Image 2025-11-20 at 1.12.06 PM.jpeg"
$dest7 = Join-Path $destPath "pride-7.jpeg"

if (Test-Path $src7) {
    Copy-Item $src7 -Destination $dest7 -Force
    $size = (Get-Item $src7).Length
    Write-Host "[OK] Copied pride-7.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src7.crdownload") {
    Write-Host "[WAIT] Image 7 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 7 not found" -ForegroundColor Red
}

# Image 8 - (1.12.06 PM (1).jpeg)
$src8 = Join-Path $downloadsPath "WhatsApp Image 2025-11-20 at 1.12.06 PM (1).jpeg"
$dest8 = Join-Path $destPath "pride-8.jpeg"

if (Test-Path $src8) {
    Copy-Item $src8 -Destination $dest8 -Force
    $size = (Get-Item $src8).Length
    Write-Host "[OK] Copied pride-8.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src8.crdownload") {
    Write-Host "[WAIT] Image 8 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 8 not found" -ForegroundColor Red
}

# Video
$srcVideo = Join-Path $downloadsPath "WhatsApp Video 2025-11-20 at 1.13.59 PM.mp4"
$destVideo = Join-Path $destPath "pride-video.mp4"

if (Test-Path $srcVideo) {
    Copy-Item $srcVideo -Destination $destVideo -Force
    $size = (Get-Item $srcVideo).Length
    Write-Host "[OK] Copied pride-video.mp4 ($([math]::Round($size/1MB, 2)) MB)" -ForegroundColor Green
} elseif (Test-Path "$srcVideo.crdownload") {
    Write-Host "[WAIT] Video still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Video not found" -ForegroundColor Red
}

Write-Host "`nDone! If all files copied successfully:" -ForegroundColor Cyan
Write-Host "1. Refresh your browser with Ctrl+Shift+R (hard refresh)" -ForegroundColor White
Write-Host "2. Or restart the dev server if needed" -ForegroundColor White

