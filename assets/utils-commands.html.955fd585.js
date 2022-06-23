import{_ as a,e}from"./app.7a5a2118.js";const n={},s=e(`<h1 id="comandos-utiles-en-mysql" tabindex="-1"><a class="header-anchor" href="#comandos-utiles-en-mysql" aria-hidden="true">#</a> Comandos Utiles en MYSQL</h1><h3 id="cambiar-la-el-tamano-de-una-columna" tabindex="-1"><a class="header-anchor" href="#cambiar-la-el-tamano-de-una-columna" aria-hidden="true">#</a> Cambiar la el tama\xF1o de una columna</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE name_table MODIFY name_column VARCHAR(30);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="eliminando-duplicados" tabindex="-1"><a class="header-anchor" href="#eliminando-duplicados" aria-hidden="true">#</a> Eliminando duplicados:</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT * FROM table_name WHERE id NOT IN (
select * FROM (SELECT MAX(n.id) FROM table_name n
GROUP BY n.date, n.name) x);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,5);function d(l,i){return s}var c=a(n,[["render",d]]);export{c as default};
