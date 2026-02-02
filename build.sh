#!/bin/bash
# Build CSS - Concatène les fichiers dans l'ordre
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cat "$SCRIPT_DIR/style/_variables.css" \
    "$SCRIPT_DIR/style/_normalize.css" \
    "$SCRIPT_DIR/style/_reset.css" \
    "$SCRIPT_DIR/style/_baseDesign.css" \
    "$SCRIPT_DIR/style/_bloc.css" \
    "$SCRIPT_DIR/style/_utilities.css" \
    "$SCRIPT_DIR/style/_responsive.css" \
    "$SCRIPT_DIR/style/_advancedDesign.css" \
    > "$SCRIPT_DIR/style/main.min.css"
echo "Build terminé"