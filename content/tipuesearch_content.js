var tipuesearch = {"pages": [{'title': 'About', 'text': '是的, 重點在於您希望建立何種樣貌的學習歷程檔案? \n 假如進入大學學習是一段  Journey , 您希望踏上一段什麼樣子的旅程? \n 是讓人回味無窮? 抑或悔不當初? \n 何謂\xa0 academic   portfolio  (學習歷程檔案)? \n https://www.uts.edu.au/research-and-teaching/learning-and-teaching/scholarship-and-research/scholarship-learning-and-teaching/developing-academic-portfolio \n A portfolio supports you in your role as an academic by creating a record of your reflection, development and achievements over time. You may like to use aspects of your portfolio to provide evidence for formal probation review, progression or promotion processes. \n https://www.hr.uwa.edu.au/working/academic/portfolio \n An Academic Portfolio is a summary of your major activities and accomplishments, documenting the nature and extent of your contributions as well as your role and achievements. It has three major components (or folios), supported by your Curriculum Vitae (CV). \n https://www.utu.fi/en/university/come-work-with-us/academic-portfolio \n A good portfolio is comprehensive, brief, and concise. The recommended maximum length of the academic portfolios used in filling the teaching vacancies at the University is five pages. Faculties may give more detailed information about the quality and quantity of appendixes. Portfolios are created for a variety of purposes, the most important situation being recruitment. Portfolio is also an excellent way for members of personnel to cultivate their expertise, and it can also be used in development discussions and when building the work unit’s job description. \n https://www.huronconsultinggroup.com/insights/academic-portfolio-data-collaboration-teach \n Successfully managing an academic portfolio requires continued collaboration and use of data. There are many stakeholders involved in the process and emphasizing the importance of collaboration will not only assist portfolio management, but also an institution’s mission and vision. Institutional and academic leaders can align conversations about strategic activities and information management to strengthen long-range academic planning. Additionally, as leaders review program-level costs and data as a part of academic portfolio management, they will be able to identify opportunities to reallocate funding to support resource-intensive academic programs. Better access to this data will also increase visibility on learning, progression and graduation outcomes. As the relationships and collaboration between academic leadership and faculty strengthen, decision making, resource allocation and data analysis will improve. \n 這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n demo 學號與帳號: mdecourse \n 網站倉儲:  https://github.com/mdecourse/cp2021_hw \n 網站連結:  https://mde.tw/cp2021_hw \n 其他與個人或作業相關資料說明或介紹: \n mdecourse 所屬的實驗室:  https://mde.tw', 'tags': '', 'url': 'About.html'}, {'title': 'run', 'text': '這個頁面利用  Brython  程式庫, 讓使用者可以直接在瀏覽器中執行 Python 語法程式 (與 CPython  語法比較 ). Brython 程式庫以 Javascript 編寫, 能在頁面 置入 html,  並 結合 第三方 Javascript 程式庫, 進行  2D  與  3D  繪圖應用. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'runsrc', 'text': 'run 頁面在動態網頁的 html: \n run.txt \n', 'tags': '', 'url': 'runsrc.html'}, {'title': 'Hybrid', 'text': '將 start_ipv4.bat 與部分檔案放在 USB 隨身碟, 使用 C 槽的 Python395 與 Portablegit. \n 在不更改 pip.exe 中 Python.exe 的絕對路徑情況下, 必須透過 python -m pip list (列出模組) 或 python -m pip install (安裝模組) \n start_ipv4.bat, data, tmp, wscite 與 home_ipv4, home_ipv6 放在隨身碟: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\nset Local=C:\\2021_cadlab_portable\\data\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_ipv4\nset HomeDrive=%Disk%:\\home_ipv4\nset Home=%Disk%:\\home_ipv4\nset USERPROFILE=%Disk%:\\home_ipv4\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Local%\\Python395\\DLLs;%Local%\\Python395\\Lib;%Local%\\Python395\\Lib\\site-packages;\n\nset PYTHONHOME=%Local%\\Python395\n\nREM 使用 putty 設定 git ssh 連線\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\nREM 設定跟 Python 有關的命令搜尋路徑\nset path_python=%Local%\\Python395;%Local%\\Python395\\Scripts;\nset path_portablegit=%Local%\\portablegit_2.31.1\\bin;\n\npath=%Disk%:;%path_python%;%path_portablegit%;%path%;\n\nREM ref: https://drive.google.com/file/d/1S0XYN-1MKxo0KFYxs0pFTcTrr8NL4n1b/view\n\nREGEDIT.EXE /S %Disk%:\\putty_github_com.reg;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wScite\\SciTE.exe\nstart /MIN %Disk%:\\wScite\\SciTE.exe\n\nExit \n Hybrid \n', 'tags': '', 'url': 'Hybrid.html'}, {'title': 'SSH', 'text': '何謂 Secure Shell? \n HTTPS:  https://en.wikipedia.org/wiki/HTTPS \n Transport Layer Security:  https://en.wikipedia.org/wiki/Transport_Layer_Security \n SSH:  https://en.wikipedia.org/wiki/Secure_Shell \n 如何利用 SSH 協定將倉儲改版內容推送到 Github: \n SSH 了沒 \n 以下為 Github 所提供有關 Token 與 SSH 的說明資料: \n Github Personal Token:  https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ \n Github SSH:  https://docs.github.com/en/authentication/connecting-to-github-with-ssh \n Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit. \n GnuPG  (GNU Privacy Guard): \n 如何利用  https://www.gpg4win.org/  保全數位檔案傳送. \n https://gnupg.org/gph/en/manual.pdf \n https://gnupg.org/documentation/manuals/gnupg.pdf \n https://www.gpg4win.org/doc/en/gpg4win-compendium.html \n 由於數位檔案很容易被改造, 因此在製作數位檔案內容時, 在 Windows 平台上可以利用 Gpg4win 加密或保全. \n GnuPG 加密 \n GnuPG 保全 - 在網站提供檔案下載前, 利用 Gpg4win 對檔案進行數位簽章', 'tags': '', 'url': 'SSH.html'}, {'title': 'HW1', 'text': '在執行作業之前, 必須要仔細閱讀作業要求內容, 想像一下作業指定者為何要提出此一作業, 其目的為何, 然後再根據要求逐一安排時間完成. \n 作業一的主題為網際動畫與 touch typing, 並要求學員要至 Github 申請帳號, 並將作業內容直接在課程網頁中執行 Brython (Browser Python), 完成後將程式碼放到各學員 Github 帳號下的 Gist 區域, 然後再將作業連結提交至課程網頁倉儲的 Discussion 區. \n 另外, 除了要修改 Task1 頁面中動畫的程式外, 還要求使用者從 Cango 頁面, 將程式中的網際按鈕放到頁面, 以便控制程式的執行或中斷. \n 假如直翻 Browser Python 就是瀏覽器上的 Python, 除了能夠在瀏覽器上執行的 Python, 還有沒有其他環境上能夠執行的 Python？ \n 例如: 1994 年剛被開發出來的 Python 是用 C 寫的, 所以稱為 CPython, 可以在各種操作系統平台上執行, 而且累積二十幾年的發展, 已經擁有許多的程式庫, 讓 CPython 可以解決許多工程問題. \n 除了 CPython 與 Brython (以 Javascript 編寫) 之外, 還有以 Java 編寫的  Jython , 以 .NET 技術編寫的  ironPython , 還有以 Rust 編寫的  RustPython  或是以 Python 編寫的  PyPy , 每一種 Python 都有其特色, 在適合的環境中可用來解決各種不同的問題. \n \n 當我們看到  https://mde.tw/cp2021/content/Task1.html  這個頁面中的程式執行時, 應該會好奇, 為何能夠直接在瀏覽器的網頁上, 直接點擊 Run, Python 程式就能執行, 在頁面中畫靜態與動態的圖型. \n 這種在網頁上畫圖的依據是採用 HTML5 規格中的  Canvas API . 原本是設計給 Javascript 在網頁上繪圖, 透過 Canvas API 程式語法, 就可以透過 Brython 在頁面中繪圖. \n \n HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n HW1 必須在 2021.10.20 22:00 之前完成 . \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.10.20 22:00 關閉 \n \n 請至  https://github.com  申請 Github 帳號後, 至  https://mde.tw/cp2021/content/Task1.html \xa0 頁面, 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n 請將 1. 的程式碼存入個人 Gist 區 ( 說明 ). \n 請在 1. 的程式中, 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 請在 Gist 檔案編輯區, 利用鍵盤輸入  https://docs.github.com/en/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists#about-gists  中的這段英文內容, 請利用手機計時, 大概需要多少時間? 請將此段練習打字的內容與所需時間存入 Gist 檔案中. \n 請至少練習 key in 這段英文內容三次, 然後看看是否已經了解如何透過電腦鍵盤 touch typing? \n 接下來請利用中文輸入  https://ithelp.ithome.com.tw/articles/10206233  的第一段中文說明, 請利用手機計時, 大概需要多少時間? \n \n \n HW1-1 : 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n HW1-2 : 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 程式碼說明: \n HW1-1.py \n Brython browser 模組 \n Brython browser html 模組 \n Brython enable/disable event \n Python 函式定義與呼叫 \n Python 縮排 (indentation) \n 字串 (string) \n 數列 (list) \n if 判斷式 \n 在 Python 關鍵字中, None, True 與 False 第一個字母都必須是大寫 \n 在 python.org 網站範圍搜尋 global 關鍵字 \n 有關 Python 的 global:  https://docs.python.org/3/faq/programming.html#what-are-the-rules-for-local-and-global-variables-in-python \n # 從 browser 導入 html\nfrom browser import html\n# 從 browser 導入 document 並且對應為 doc\nfrom browser import document as doc\n# 導入 browser.timer\nimport browser.timer\n\n# 定義一個 game() 函式\ndef game():\n    """\n利用 global 關鍵字 將 px, py 與 speed \n設為可在函式內改變對應內容 \n(意即, 這三個定義在函式外的全域變數,  \n在函式中分別位於等號左邊)\n    """\n    global px, py, speed\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    if px < canvas.width/2:\n        px += speed\n    else:\n        py -= speed\n    \n    if px < 0 or (px + width) > canvas.width:\n        speed = -speed\n    if py < 0 or (py + height) > canvas.height:\n        speed = -speed\n    \n    ctx.fillRect(px, py, width, height)\n\n"""\na variable declared outside of the function or \nin global scope is known as a global variable. \nThis means that a global variable can be accessed \ninside or outside of the function.\n"""\n\ncanvas = html.CANVAS(width = 600, height = 600)\ncanvas.id = "game-board"\nbrython_div = doc["brython_div"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeed = 2\n\nbrowser.timer.set_interval(game, 10) \n HW1-2.py \n from browser import document as doc\nfrom browser import timer\nfrom browser import html\nimport math\n\n# 建立 game-board canvas\n\ncanvas = html.CANVAS(width = 300, height = 300)\ncanvas.id = "game-board"\nbrython_div = doc["brython_div"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeed = 2\n\n# 建立 button\nbrython_div <= html.BUTTON("啟動", id="power")\n \ndef game():\n    global px, py, speed\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    if px < canvas.width/2:\n        px += speed\n    else:\n        py -= speed\n    \n    if px < 0 or (px + width) > canvas.width:\n        speed = -speed\n    if py < 0 or (py + height) > canvas.height:\n        speed = -speed\n    \n    ctx.fillRect(px, py, width, height)\n \n \n# 將 anim 設為 None\nanim = None\n \ndef launchAnimation(ev):\n    global anim\n    # 初始啟動, anim 為 None\n    if anim is None:\n        # 每 0.1 秒執行一次 draw 函式繪圖\n        anim = timer.set_interval(game, 10)\n        # 初始啟動後, 按鈕文字轉為"暫停"\n        doc[\'power\'].text = \'暫停\'\n    elif anim == \'hold\':\n        # 當 anim 為 \'hold\' 表示曾經暫停後的啟動, 因此持續以 set_interval() 持續旋轉, 且將 power 文字轉為"暫停"\n        anim = timer.set_interval(game, 10)\n        doc[\'power\'].text = \'暫停\'\n    else:\n        # 初始啟動後, 使用者再按 power, 此時 anim 非 None 也不是 \'hold\', 因此會執行 clear_interval() 暫停\n        # 且將 anim 變數設為 \'hold\', 且 power 文字轉為"繼續"\n        timer.clear_interval(anim)\n        anim = \'hold\'\n        doc[\'power\'].text = \'繼續\'\n\n \ndoc["power"].bind("click", launchAnimation)\n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': '在電腦輔助設計的新電腦上可以利用 USB 隨身碟設定所謂 Hybrid 可攜程式系統, 也就是 Python 與 Portablegit 使用 c:\\2021_portable_kmol\\data 目錄中的檔案, 而將 start_ipv4.bat, start_ipv6.bat, data, wscite, tmp 等目錄放在 USB 隨身碟. \n \n HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 必須在 2021.11.03 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.10.25 開啟, 於  2021.11.03 22:00 關閉 \n 可攜程式系統與 Python 範例程式收集整理 \n 1. 請準備一個至少 64 GB 大小的 USB 3.0 以上隨身碟 (或外接 SSD), 根據  Task2  中的說明, 建立自己的可攜程式系統.\xa0 \n 2. 請登入 Github 帳號後, 連線至  https://github.com/mdecourse/cp2021_hw  後, 透過  Use this template  按鈕建立自己的 cp2021_hw 倉儲. 並至該倉儲的 Settings -> Pages -> Source 將 main 分支設為 Github Pages 的 root (也就是選擇將倉儲的 main 分支設為對應網站的根目錄). \n 3. 請將 HW1 與 HW2 的作業內容登錄至個人的 cp2021_hw 倉儲與網站中. (學習如何透過 git 指令修改倉儲中的版本內容) \n 4. 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如  run  頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇:  https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py  將  https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439  作為  https://mde.tw/cp2021/content/run.html  頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行)', 'tags': '', 'url': 'HW2.html'}, {'title': 'Server', 'text': '在電腦輔助設計室中的 11 台舊電腦, 因為第三磁區並沒有保護, 因此可以設定為 Flask 與 Fossil SCM server 主機. \n 六台新電腦中的一台可以透過  remote desktop  連線至各分組的伺服器進行設定. \n Windows 10 中的動態課程網頁系統: \n 以 waitress 執行 cmsimde/wsgi.py: \n python -m pip install waitress \n 建立一個 waitress_server.py: \n # 執行前, 必須要先利用 python -m pip install waitress 安裝 wairess 模組\n# 接著從 waitress 導入 serve\nfrom waitress import serve\n \n# 導入 flaskapp\n# 在不更動 cmsimde 子模組架構內容的情況下, 必須複製一份\n# cmsimde/nocache.py 至倉儲目錄.\nfrom cmsimde import flaskapp\n \n# run flaskapp.app with production waitress\nserve(flaskapp.app, host=\'0.0.0.0\', port=5000, url_scheme=\'https\') \n 接著先除去 url_scheme=\'https\' 後以 python waitress_server.py 執行. cmsimde 主機將可透過瀏覽器連結  http://server_ip:5000   \n 接下來則可以利用  Stunnel  作為 https 代理主機, 作為  http://server_ip:5000  與外部瀏覽器連接的代理轉接者. \n stunnel.conf 設定內容: \n [https]\naccept = 8443\nconnect = 5000\ncert = fullchain.pem\nkey = privkey.pem\nTIMEOUTclose = 0 \n cmsimde 系統的靜態網頁則可以利用  Nginx  伺服. \n Nginx 在 Ubuntu /etc/nginx/sites-available/default 中的設定: \n server {\n    listen 80;\n    listen [::]:80;\n    root /home/wcm2021/newcms;\n    index index.html;\n   \n    location /static {\n        alias /home/wcm2021/newcms/cmsimde/static/;\n    }\n   \n    location /downloads {\n        alias /home/wcm2021/newcms/downloads/;\n    }\n   \n    location /images {\n        alias /home/wcm2021/newcms/images/;\n    }\n   \n    location / {\n            try_files $uri $uri/ =404;\n    } \n       \n    location /blog {\n        alias /home/wcm2021/cmsimfly/blog/;\n    }\n   \n    location /reveal {\n        alias /home/wcm2021/cmsimfly/reveal/;\n    }\n}\n   \nserver {\n    listen 443 ssl;\n    #listen [::]:443 ssl ipv6only=on;\n    \n    location /static {\n        alias /home/wcm2021/cmsimfly/static/;\n    }\n    \n    location / {\n        include uwsgi_params;\n        uwsgi_pass  127.0.0.1:8080;\n    }\n    \n    #server_name ipv4_ip; \n    #ssl on;\n    ssl_certificate /etc/stunnel/localhost.crt;\n    ssl_certificate_key /etc/stunnel/localhost.key;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n}\n    \nserver {\n    #listen 89 default_server;\n    #listen [::]:89 default_server ipv6only=on;\n    \n    listen 8943 ssl;\n    #listen [::]:8943 ssl ipv6only=on;\n    \n    location /static {\n        alias /home/wcm2021/cmsimfly2/static/;\n    }\n    \n    location / {\n        include uwsgi_params;\n        uwsgi_pass  127.0.0.1:8082;\n    }\n    \n    #server_name ipv4_ip;\n    #ssl on;\n    ssl_certificate /etc/stunnel/localhost.crt;\n    ssl_certificate_key /etc/stunnel/localhost.key;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n}\n   \nserver {\n    #listen 88 default_server;\n    #listen [::]:88 default_server ipv6only=on;\n    \n    listen 8843 ssl;\n    #listen [::]:8843 ssl ipv6only=on;\n    \n    location /static {\n        alias /home/wcm2021/newcms/cmsimde/static/;\n    }\n    \n    location / {\n        include uwsgi_params;\n        uwsgi_pass  127.0.0.1:8081;\n    }\n    \n    #server_name ipv4_ip;\n    #ssl on;\n    ssl_certificate /etc/stunnel/localhost.crt;\n    ssl_certificate_key /etc/stunnel/localhost.key;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n} \n', 'tags': '', 'url': 'Server.html'}, {'title': 'HW3', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks', 'tags': '', 'url': 'Final Project.html'}]};