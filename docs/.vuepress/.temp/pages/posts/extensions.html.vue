<template><h1 id="extensiones-vscode-para-analisis-de-datos" tabindex="-1"><a class="header-anchor" href="#extensiones-vscode-para-analisis-de-datos" aria-hidden="true">#</a> Extensiones VSCode para analisis de datos</h1>
<ul>
<li>Python</li>
<li>Magic Python</li>
<li>Material Icon Theme</li>
<li>Rainbow Brackets</li>
<li>Remote Development</li>
</ul>
<h2 id="notebook-dentro-de-vscode" tabindex="-1"><a class="header-anchor" href="#notebook-dentro-de-vscode" aria-hidden="true">#</a> Notebook dentro de VSCode</h2>
<ul>
<li>Crea una carpeta , añade un archivo en ella con la siguiente extension &quot;.ipynb&quot;</li>
</ul>
<blockquote>
<p>Visual Studio Code te recomendará instalar las extensiones necesarias para ejecutar tu Jupyter Notebook.
<img src="@source/../docs/.vuepress/public/datascience/jupiter_notebook1.png" alt="Jupyter Notebook" loading="lazy"></p>
</blockquote>
<ul>
<li>Puedes obtener el mismo resultado ejecutando los siguientes comandos desde el terminal.</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip3 <span class="token function">install</span> ipykernel
pip3 <span class="token function">install</span> jupyter
pip3 <span class="token function">install</span> notebook
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>Si despues de instalar estos programas tienes problemas que no te reconoce los comnandos.
<code>command not found: jupyter</code> al ejecutar  <code>jupyter notebook</code>. Puedes utilizar el siguiente comando.</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> -H pip <span class="token function">install</span> jupyter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Execute a command as another user -H
The -H (HOME) option requests that the security policy set the HOME environment variable to the home directory of the target user (root by default) as specified by the password database. Depending on the policy, this may be the default behavior.</p>
<ul>
<li>Para  comprobar que tienes instalado correctamente Jupyter ejecuta en consola el siguiente comando:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>jupyter --version

<span class="token comment"># resultado (ejemplo):</span>
Selected Jupyter core packages<span class="token punctuation">..</span>.
IPython          <span class="token builtin class-name">:</span> <span class="token number">8.1</span>.1
ipykernel        <span class="token builtin class-name">:</span> <span class="token number">6.9</span>.1
ipywidgets       <span class="token builtin class-name">:</span> <span class="token number">7.6</span>.5
jupyter_client   <span class="token builtin class-name">:</span> <span class="token number">7.1</span>.2
jupyter_core     <span class="token builtin class-name">:</span> <span class="token number">4.9</span>.2
jupyter_server   <span class="token builtin class-name">:</span> <span class="token number">1.13</span>.5
jupyterlab       <span class="token builtin class-name">:</span> <span class="token number">3.3</span>.0
nbclient         <span class="token builtin class-name">:</span> <span class="token number">0.5</span>.11
nbconvert        <span class="token builtin class-name">:</span> <span class="token number">6.4</span>.2
nbformat         <span class="token builtin class-name">:</span> <span class="token number">5.1</span>.3
notebook         <span class="token builtin class-name">:</span> <span class="token number">6.4</span>.8
qtconsole        <span class="token builtin class-name">:</span> <span class="token number">5.2</span>.2
traitlets        <span class="token builtin class-name">:</span> <span class="token number">5.1</span>.1

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote>
<p>Puedes usar Jupyter Notebook fuera de Vscode con env
<a href="https://linuxways.net/ubuntu/how-to-install-jupyter-notebook-on-ubuntu-20-04/" target="_blank" rel="noopener noreferrer">How to Install Jupyter Notebook on Ubuntu 20.04 via env<ExternalLinkIcon/></a></p>
</blockquote>
</template>
