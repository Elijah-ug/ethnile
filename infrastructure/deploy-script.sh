#!/bin/bash

# Update and upgrade packages
apt update -y && apt upgrade -y

# Install Nginx
apt install -y nginx
systemctl enable nginx
systemctl start nginx

# Install PHP (with common extensions)
apt install -y php php-fpm php-cli php-mysql php-xml php-mbstring php-curl

# Install Node.js (LTS version) & npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt install -y nodejs

# Install Git
apt install -y git

# Install MySQL Server
DEBIAN_FRONTEND=noninteractive apt install -y mysql-server

# Secure MySQL installation (with default answers)
mysql_secure_installation <<EOF

y
n
y
y
y
EOF

# Enable and start MySQL
systemctl enable mysql
systemctl start mysql

# Verify installations
nginx -v
php -v
node -v
npm -v
git --version
mysql --version

# Cleanup
apt autoremove -y
apt clean

echo "Server setup complete with Nginx, PHP, Node.js, Git, and MySQL!"
