HALOGY 1.3 INSTALLATION GUIDE
=============================

New! We've included an installer script to help with the installation process. The script will check your server configurations and make sure everything is ok with your site. 

Thank you for downloading Halogy. This guide provides the basic steps needed in order to get Halogy running on your server. 


QUICK START GUIDE
------------------------------

1. Download the latest repository from https://github.com/jesseorndorff/Halogy
2. Extract the contents in to your Web Root folder (including the '/static' folder, 'index.php' and the '.htaccess' files).
3. Load the install script at: http://www.yourserver.com/install
4. Follow the instructions for setting up your Halogy site.

-- NOTE: At this point Halogy should run on your domain, but for security reasons we suggest you continue --

5. Move the '/halogy' outside of the Web Root, for example in to the parent directory, or a Code repository folder.
6. Edit the 'index.php' file, go to line 63, and change the path to your new system folder (e.g. '../halogy').

-- TESTING A NEW SITE --

7. Go to 'mydomain.com/admin'.
8. Login with the default superuser account: (superuser / super123).
9. Change your superuser password to a more secure password and then create a website administrator by clicking on Users.

You should now be good to go.


FURTHER CONFIGURATIONS
------------------------------

Because Halogy is built upon the amazing CodeIgniter framework (http://codeigniter.com), you can easily extend and modify Halogy to your hearts content. There are also configurations you can make to Halogy using the standard CodeIgniter configuration files, for example the database.php (in /halogy/config), the config.php (for character encoding and compression settings), etc.


MODULES
------------------------------

We hope you'll find the built-in modules everything you'll need for your sites, however you are free to build your own modules by just building mini-applications (see the CodeIgniter and HMVC documentation) and dropping them in to the Modules folder inside the Application. You can then access the modules by going to yoursite.com/module.



YOUR LEGAL OBLIGATION
------------------------------

By using Halogy you agree to be bound by the license terms and conditions stated on our website:

http://www.halogy.com/license