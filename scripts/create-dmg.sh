#!/usr/bin/env bash
set -euo pipefail

APP_NAME="ChatGPT"
APP_BUNDLE_PATH="dist/${APP_NAME}-darwin-x64/${APP_NAME}.app"
STAGING_DIR="dist/dmg-staging"
DMG_PATH="dist/${APP_NAME}.dmg"

if [[ ! -d "${APP_BUNDLE_PATH}" ]]; then
  echo "App bundle not found: ${APP_BUNDLE_PATH}"
  echo "Run 'npm run build' first."
  exit 1
fi

rm -rf "${STAGING_DIR}" "${DMG_PATH}"
mkdir -p "${STAGING_DIR}"
cp -R "${APP_BUNDLE_PATH}" "${STAGING_DIR}/"
ln -s /Applications "${STAGING_DIR}/Applications"

hdiutil create \
  -volname "${APP_NAME}" \
  -srcfolder "${STAGING_DIR}" \
  -ov \
  -format UDZO \
  "${DMG_PATH}"

rm -rf "${STAGING_DIR}"
echo "Created ${DMG_PATH}"
