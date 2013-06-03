clear
echo "\033[36m >>>>>>>>> Here we go ...\n\033[0m"
echo "\033[36m >>>>>>>>> Getting composer ...\n\n\n\033[0m"
curl -sS https://getcomposer.org/installer | php
wait
echo "\033[36m \n\n>>>>>>>>> Installing project dependencies ...\n\033[0m"
php composer.phar install 
wait
echo "\033[36m\n\n>>>>>>>>> Installing node.js modules for grunt tasks ...\n\033[0m"
npm install
wait
echo "\033[36m \n\n>>>>>>>>> Installing assets via Bower ...\n\033[0m"
bower install
wait
echo "\033[36m \n\n>>>>>>>>> All done.\n\033[0m"