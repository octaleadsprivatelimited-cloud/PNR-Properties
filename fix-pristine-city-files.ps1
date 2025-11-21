# Script to copy JB's Pristine City images and video once downloads complete
# Run this script after downloads finish (no .crdownload extension)

$downloadsPath = "C:\Users\bheemesh\Downloads"
$destPath = "C:\Users\bheemesh\Karthikeya-Constructions-1\public\images"

Write-Host "Checking and copying JB's Pristine City files...`n" -ForegroundColor Cyan

# Image 1 - (2).jpeg
$src1 = Join-Path $downloadsPath "WhatsApp Image 2025-11-19 at 10.59.20 PM (2).jpeg"
$dest1 = Join-Path $destPath "pristine-city-1.jpeg"

if (Test-Path $src1) {
    Copy-Item $src1 -Destination $dest1 -Force
    $size = (Get-Item $src1).Length
    Write-Host "[OK] Copied pristine-city-1.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src1.crdownload") {
    Write-Host "[WAIT] Image 1 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 1 not found" -ForegroundColor Red
}

# Image 2 - (3).jpeg
$src2 = Join-Path $downloadsPath "WhatsApp Image 2025-11-19 at 10.59.20 PM (3).jpeg"
$dest2 = Join-Path $destPath "pristine-city-2.jpeg"

if (Test-Path $src2) {
    Copy-Item $src2 -Destination $dest2 -Force
    $size = (Get-Item $src2).Length
    Write-Host "[OK] Copied pristine-city-2.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src2.crdownload") {
    Write-Host "[WAIT] Image 2 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 2 not found" -ForegroundColor Red
}

# Video - (1).mp4
$srcVideo = Join-Path $downloadsPath "WhatsApp Video 2025-11-19 at 11.10.46 PM (1).mp4"
$destVideo = Join-Path $destPath "pristine-city-video.mp4"

if (Test-Path $srcVideo) {
    Copy-Item $srcVideo -Destination $destVideo -Force
    $size = (Get-Item $srcVideo).Length
    Write-Host "[OK] Copied pristine-city-video.mp4 ($([math]::Round($size/1MB, 2)) MB)" -ForegroundColor Green
} elseif (Test-Path "$srcVideo.crdownload") {
    Write-Host "[WAIT] Video still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Video not found" -ForegroundColor Red
}

Write-Host "`nDone! If all files copied successfully:" -ForegroundColor Cyan
Write-Host "1. Refresh your browser with Ctrl+Shift+R (hard refresh)" -ForegroundColor White
Write-Host "2. Or restart the dev server if needed" -ForegroundColor White

