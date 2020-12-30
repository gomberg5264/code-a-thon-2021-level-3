# Requirements & Prerequisites

This course assumes that you're an experienced web developer, and know how to build web applications using HTML, JavaScript, and CSS. We will not teach you any of those technologies during the course.

To work with React, and participate in the Level III training sessions, requires that you have access to a computer system capable of running the React developer tool chain. You must have a full-blown computer system (laptop or desktop computer), not a Chromebook or equivalent. You could even use a [Raspberry Pi](https://www.raspberrypi.org/) if you wanted.

The development system you use must have enough available disk space to install of the required tools; unfortunately, I don't have enough information to provide you with an exact number, but you should probably select a system that has at least 5 GB of available (free) disk space.

Participants will also collaborate with other Code-A-Thon participants to build (code) and publish a React web application, so you'll also need accounts for several online services. 

The purpose of this document is to provide you with all of the details you need to begin the course with everything you need to be successful.

## Software Component Installation

1. The React developer toolchain uses [Node.js](https://nodejs.org/en/) to create, build (compile), and deploy React web applications.

	To install Node.js, [download the installer](https://nodejs.org/en/download/) for your development system (matching the download to the development system's operating system (OS)), and launch the downloaded file to perform the installation. The Node.js team publishes two versions of Node, a *Long Term Support* (LTS) version and the latest and greatest version called *Current*. For our purposes, you should install the LTS version if possible; we won't make use of any of the Current features (that I know of).

2. We'll use [Visual Studio Code](https://code.visualstudio.com/) to edit our React application source code. You can use any text editor you want, but all of the in-class demonstrations will be performed using Visual Studio Code and most project collaborators will use it as well.

	To install Visual Studio Code, [download the latest version](https://code.visualstudio.com/download) for your development system (matching the download to the development system's operating system (OS)), and launch the downloaded file to perform the installation. 

3. Well use the [Git](https://git-scm.com/) distributed version control system to collaborate with other developers, so we'll install this now to make sure we have it when we need it. 

	Some versions of Linux and macOS offer built-in support for Git. Windows users must install the software manually. To verify whether git is already available on your system, open a terminal window (Linux or macOS) or command prompt (WindowS) and execute the following command: `git`.  

	Git is installed and operational if the system responds with a bunch of text that begins with the the following:

	```shell
	usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]     
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
    ```

    For Linux or macOS, if your system supports Git, but you have some extra steps to enable it, the system will respond with those instructions. 

    For Windows users, or if Linux or macOS users don't support Git directly, then you can [download the lastest version of Git](https://git-scm.com/downloads) and launch the downloaded file to install the application. Linix and macOS can also install git using platform package managers (most developers use [Homebrew](https://brew.sh/) on macOS to install apps like Git).

    When you're done, close any open terminal windows or command prompts you have open. On most systems, the Git installation adds the Git binary folder to the system path so you can execute Git from any terminal. You'll have to restart the terminal application to apply those settings. 
    
    Next, go ahead and clone this code repository so you'll have it during the course. Open a new terminal window or command prompt, navigate to where you'd like to copy the course files, then execute the following command:

    ```shell
    git clone https://github.com/WCTD/code-a-thon-2021-level-3
    ```

    When you're done, you'll have a new folder called `code-a-thon-2021-level-3` containing all of the files from this repository (we usually say repo to keep it short).

4. (Optional) [GitHub Desktop](https://desktop.github.com/) puts a nice user interface on Git, so you may find it easier to use Desktop than the Git command line; I'll demonstrate how to use the application during the course.

	To install GitHub Desktop, download the latest version from https://desktop.github.com/ and launch the downloaded file to install the application. 

5. (Optional) I'll use the [Google Chrome](https://www.google.com/chrome/) browser (or equavalent like Microsoft Edge) during the course, so if you want to follow along, you'll need the Chrome browser installed on your development system. 

	To install Chrome, download the latest version from https://www.google.com/chrome/ and launch the downloaded file to install the application.

6. (Optional) The React project maintains a Chrome extension called [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to help developers test and debug React applications using the Chrome Developer Tools. I'll demonstrate the extension during the course.

	To install the extension, open Chrome and navigate to the link provided in the previous paragraph to install the extension in the browser.

## Online Accounts

To complete the Code-A-Thon, you'll need accounts with several online solution providers (each of the solutions are free for the type of use expected here).

### GitHub

As you interact with other Code-A-Thon participants building your team's React app, you'll need a way to share the app's source code across multiple users. For this purpose, we've selected [GitHub](https://github.com/) an online version control application that offers many useful capabilities in its free tier.

If you don't already have a GitHub account, open your development system's primary browser and navigate to [https://github.com](https://github.com) and click the **Sign up** button in the GitHub landing page's upper-right corner to start the registration process.

### Netlify

Netlify account (use the GitHub account)

## Getting Help

If you have questions or issues completing the prerequisites installation, Create an [issue](https://github.com/WCTD/code-a-thon-2021-level-3/issues) in this repository or attend one of the Office Hour sessions offered by the We Connect The Dots Code-A-Thon team. 
