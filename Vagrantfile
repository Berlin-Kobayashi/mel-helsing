Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end
 # config.vm.network :forwarded_port, guest: 80, host: 4567,
 # auto_correct: true
  config.vm.network "private_network", ip: "192.168.8.89"
end