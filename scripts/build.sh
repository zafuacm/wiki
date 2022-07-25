#!/bin/sh

curl -sSL https://github.com/rust-lang/mdBook/releases/download/v0.4.21/mdbook-v0.4.21-x86_64-unknown-linux-gnu.tar.gz | tar -xz
curl -sSL https://github.com/tommilligan/mdbook-admonish/releases/download/v1.7.0/mdbook-admonish-v1.7.0-x86_64-unknown-linux-gnu.tar.gz | tar -xz
wget -q https://github.com/rogeryoungh/preprocessor-md-tex/releases/download/v0.1.2/preprocessor-md-tex

chmod +x mdbook
chmod +x mdbook-admonish
chmod +x preprocessor-md-tex

./preprocessor-md-tex ./docs/
./mdbook build
