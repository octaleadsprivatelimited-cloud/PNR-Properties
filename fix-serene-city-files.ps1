# Script to copy Serene City images and video once downloads complete
# Run this script after downloads finish (no .crdownload extension)

$downloadsPath = "C:\Users\bheemesh\Downloads"
$destPath = "C:\Users\bheemesh\Karthikeya-Constructions-1\public\images"

Write-Host "Checking and copying JB's Serene City files...`n" -ForegroundColor Cyan

# Image 1 - Note: The first image has "(1)" in the filename
$src1 = Join-Path $downloadsPath "WhatsApp Image 2025-11-19 at 10.42.45 PM (1).jpeg"
$dest1 = Join-Path $destPath "serene-city-1.jpeg"

if (Test-Path $src1) {
    Copy-Item $src1 -Destination $dest1 -Force
    $size = (Get-Item $src1).Length
    Write-Host "[OK] Copied serene-city-1.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src1.crdownload") {
    Write-Host "[WAIT] Image 1 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 1 not found" -ForegroundColor Red
}

# Image 2
$src2 = Join-Path $downloadsPath "WhatsApp Image 2025-11-19 at 10.42.45 PM.jpeg"
$dest2 = Join-Path $destPath "serene-city-2.jpeg"

if (Test-Path $src2) {
    Copy-Item $src2 -Destination $dest2 -Force
    $size = (Get-Item $src2).Length
    Write-Host "[OK] Copied serene-city-2.jpeg ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
} elseif (Test-Path "$src2.crdownload") {
    Write-Host "[WAIT] Image 2 still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Image 2 not found" -ForegroundColor Red
}

# Video
$src3 = Join-Path $downloadsPath "WhatsApp Video 2025-11-19 at 10.52.18 PM.mp4"
$dest3 = Join-Path $destPath "serene-city-video.mp4"

if (Test-Path $src3) {
    Copy-Item $src3 -Destination $dest3 -Force
    $size = (Get-Item $src3).Length
    Write-Host "[OK] Copied serene-city-video.mp4 ($([math]::Round($size/1MB, 2)) MB)" -ForegroundColor Green
} elseif (Test-Path "$src3.crdownload") {
    Write-Host "[WAIT] Video still downloading..." -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Video not found" -ForegroundColor Red
}

Write-Host "`nDone! If all files copied successfully:" -ForegroundColor Cyan
Write-Host "1. Refresh your browser with Ctrl+Shift+R (hard refresh)" -ForegroundColor White
Write-Host "2. Or restart the dev server if needed" -ForegroundColor White

