#!/usr/bin/env bash

# This bootstrap was created by Module Juggler: https://github.com/DanShu93/module-juggler

# install colorful terminal
sed -i 's/^.*force_color_prompt=yes.*/force_color_prompt=yes/' /home/vagrant/.bashrc
source /home/vagrant/.bashrc

# install apache2
sudo apt-get update
sudo apt-get install -y apache2

# install web root link
if ! [ -L /var/www ]; then
  rm -rf /var/www/html
  ln -fs /vagrant /var/www/html
fi

# install apache2 rewrite module
sudo a2enmod rewrite
sudo service apache2 restart

# install Git
sudo apt-get install -y git

# install common command line tools
git clone https://github.com/DanShu93/common-command-line-tools.git /home/vagrant/common-command-line-tools

# install .htaccess
sudo php /home/vagrant/common-command-line-tools/apache2/htaccessEnabler.php
sudo service apache2 restart

# install grunt-cli
sudo npm install -g grunt-cli

# npm install
cd /vagrant
sudo npm install

# grunt install
cd /vagrant
sudo grunt
