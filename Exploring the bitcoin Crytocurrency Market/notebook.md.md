---
jupyter:
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
  language_info:
    codemirror_mode:
      name: ipython
      version: 3
    file_extension: .py
    mimetype: text/x-python
    name: python
    nbconvert_exporter: python
    pygments_lexer: ipython3
    version: 3.6.7
  nbformat: 4
  nbformat_minor: 2
---

::: {.cell .markdown dc="{\"key\":\"4\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 1. Bitcoin and Cryptocurrencies: Full dataset, filtering, and reproducibility {#1-bitcoin-and-cryptocurrencies-full-dataset-filtering-and-reproducibility}

```{=html}
<p>Since the <a href="https://newfronttest.bitcoin.com/bitcoin.pdf">launch of Bitcoin in 2008</a>, hundreds of similar projects based on the blockchain technology have emerged. We call these cryptocurrencies (also coins or cryptos in the Internet slang). Some are extremely valuable nowadays, and others may have the potential to become extremely valuable in the future<sup>1</sup>. In fact, on the 6th of December of 2017, Bitcoin has a <a href="https://en.wikipedia.org/wiki/Market_capitalization">market capitalization</a> above $200 billion. </p>
```
```{=html}
<p><center>
<img src="https://assets.datacamp.com/production/project_82/img/bitcoint_market_cap_2017.png" style="width:500px"> <br> 
<em>The astonishing increase of Bitcoin market capitalization in 2017.</em></center></p>
```
```{=html}
<p>*<sup>1</sup> <strong>WARNING</strong>: The cryptocurrency market is exceptionally volatile<sup>2</sup> and any money you put in might disappear into thin air.  Cryptocurrencies mentioned here <strong>might be scams</strong> similar to <a href="https://en.wikipedia.org/wiki/Ponzi_scheme">Ponzi Schemes</a> or have many other issues (overvaluation, technical, etc.). <strong>Please do not mistake this for investment advice</strong>. *</p>
```
```{=html}
<p><em><sup>2</sup> <strong>Update on March 2020</strong>: Well, it turned out to be volatile indeed :D</em></p>
```
```{=html}
<p>That said, let's get to business. We will start with a CSV we conveniently downloaded on the 6th of December of 2017 using the coinmarketcap API (NOTE: The public API went private in 2020 and is no longer available) named <code>datasets/coinmarketcap_06122017.csv</code>. </p>
```
:::

::: {.cell .code execution_count="139" dc="{\"key\":\"4\"}" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
# Importing pandas
import pandas as pd

# Importing matplotlib and setting aesthetics for plotting later.
import matplotlib.pyplot as plt
%matplotlib inline
%config InlineBackend.figure_format = 'svg' 
plt.style.use('fivethirtyeight')

# Reading datasets/coinmarketcap_06122017.csv into pandas
dec6 = pd.read_csv('datasets/coinmarketcap_06122017.csv')

# Selecting the 'id' and the 'market_cap_usd' columns
market_cap_raw = dec6[['id','market_cap_usd']]

# Counting the number of values
# ... YOUR CODE FOR TASK 2 ...
market_cap_raw.count()
```

::: {.output .execute_result execution_count="139"}
    id                1326
    market_cap_usd    1031
    dtype: int64
:::
:::

::: {.cell .code execution_count="140" dc="{\"key\":\"4\"}" trusted="true"}
``` {.python}
market_cap_raw
```

::: {.output .execute_result execution_count="140"}
```{=html}
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>market_cap_usd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>bitcoin</td>
      <td>2.130493e+11</td>
    </tr>
    <tr>
      <th>1</th>
      <td>ethereum</td>
      <td>4.352945e+10</td>
    </tr>
    <tr>
      <th>2</th>
      <td>bitcoin-cash</td>
      <td>2.529585e+10</td>
    </tr>
    <tr>
      <th>3</th>
      <td>iota</td>
      <td>1.475225e+10</td>
    </tr>
    <tr>
      <th>4</th>
      <td>ripple</td>
      <td>9.365343e+09</td>
    </tr>
    <tr>
      <th>5</th>
      <td>dash</td>
      <td>5.794076e+09</td>
    </tr>
    <tr>
      <th>6</th>
      <td>litecoin</td>
      <td>5.634498e+09</td>
    </tr>
    <tr>
      <th>7</th>
      <td>bitcoin-gold</td>
      <td>4.920065e+09</td>
    </tr>
    <tr>
      <th>8</th>
      <td>monero</td>
      <td>4.331688e+09</td>
    </tr>
    <tr>
      <th>9</th>
      <td>cardano</td>
      <td>3.231420e+09</td>
    </tr>
    <tr>
      <th>10</th>
      <td>ethereum-classic</td>
      <td>2.866555e+09</td>
    </tr>
    <tr>
      <th>11</th>
      <td>nem</td>
      <td>2.583927e+09</td>
    </tr>
    <tr>
      <th>12</th>
      <td>eos</td>
      <td>2.567610e+09</td>
    </tr>
    <tr>
      <th>13</th>
      <td>neo</td>
      <td>2.452898e+09</td>
    </tr>
    <tr>
      <th>14</th>
      <td>stellar</td>
      <td>2.407074e+09</td>
    </tr>
    <tr>
      <th>15</th>
      <td>monacoin</td>
      <td>1.119571e+09</td>
    </tr>
    <tr>
      <th>16</th>
      <td>bitconnect</td>
      <td>1.106525e+09</td>
    </tr>
    <tr>
      <th>17</th>
      <td>lisk</td>
      <td>1.046840e+09</td>
    </tr>
    <tr>
      <th>18</th>
      <td>zcash</td>
      <td>9.802597e+08</td>
    </tr>
    <tr>
      <th>19</th>
      <td>omisego</td>
      <td>9.578316e+08</td>
    </tr>
    <tr>
      <th>20</th>
      <td>qtum</td>
      <td>9.147999e+08</td>
    </tr>
    <tr>
      <th>21</th>
      <td>tether</td>
      <td>8.150593e+08</td>
    </tr>
    <tr>
      <th>22</th>
      <td>waves</td>
      <td>7.063190e+08</td>
    </tr>
    <tr>
      <th>23</th>
      <td>stratis</td>
      <td>6.959148e+08</td>
    </tr>
    <tr>
      <th>24</th>
      <td>populous</td>
      <td>6.535758e+08</td>
    </tr>
    <tr>
      <th>25</th>
      <td>hshare</td>
      <td>6.510596e+08</td>
    </tr>
    <tr>
      <th>26</th>
      <td>ardor</td>
      <td>5.454317e+08</td>
    </tr>
    <tr>
      <th>27</th>
      <td>bitshares</td>
      <td>4.771547e+08</td>
    </tr>
    <tr>
      <th>28</th>
      <td>bytecoin-bcn</td>
      <td>4.182505e+08</td>
    </tr>
    <tr>
      <th>29</th>
      <td>ark</td>
      <td>4.163431e+08</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1296</th>
      <td>wowecoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1297</th>
      <td>bitfid</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1298</th>
      <td>vegascoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1299</th>
      <td>gameleaguecoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1300</th>
      <td>bitcentavo</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1301</th>
      <td>cybercoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1302</th>
      <td>eggcoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1303</th>
      <td>shellcoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1304</th>
      <td>deltacredits</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1305</th>
      <td>cashme</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1306</th>
      <td>x2</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1307</th>
      <td>opescoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1308</th>
      <td>bitalphacoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1309</th>
      <td>psilocybin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1310</th>
      <td>ocow</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1311</th>
      <td>safecoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1312</th>
      <td>pokecoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1313</th>
      <td>sportscoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1314</th>
      <td>omicron</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1315</th>
      <td>pinkdog</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1316</th>
      <td>teracoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1317</th>
      <td>zsecoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1318</th>
      <td>bixc</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1319</th>
      <td>tyrocoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1320</th>
      <td>picoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1321</th>
      <td>turbocoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1322</th>
      <td>birds</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1323</th>
      <td>bitcoincashscrypt</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1324</th>
      <td>swisscoin</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1325</th>
      <td>faceblock</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>1326 rows × 2 columns</p>
</div>
```
:::
:::

::: {.cell .markdown dc="{\"key\":\"11\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 2. Discard the cryptocurrencies without a market capitalization {#2-discard-the-cryptocurrencies-without-a-market-capitalization}

```{=html}
<p>Why do the <code>count()</code> for <code>id</code> and <code>market_cap_usd</code> differ above? It is because some cryptocurrencies listed in coinmarketcap.com have no known market capitalization, this is represented by <code>NaN</code> in the data, and <code>NaN</code>s are not counted by <code>count()</code>. These cryptocurrencies are of little interest to us in this analysis, so they are safe to remove.</p>
```
:::

::: {.cell .code execution_count="142" dc="{\"key\":\"11\"}" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
# Filtering out rows without a market capitalization
cap = market_cap_raw.query('market_cap_usd > 0')

# Counting the number of values again
# ... YOUR CODE FOR TASK 3 ...
cap.count()
```

::: {.output .execute_result execution_count="142"}
    id                1031
    market_cap_usd    1031
    dtype: int64
:::
:::

::: {.cell .markdown dc="{\"key\":\"18\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 3. How big is Bitcoin compared with the rest of the cryptocurrencies? {#3-how-big-is-bitcoin-compared-with-the-rest-of-the-cryptocurrencies}

```{=html}
<p>At the time of writing, Bitcoin is under serious competition from other projects, but it is still dominant in market capitalization. Let's plot the market capitalization for the top 10 coins as a barplot to better visualize this.</p>
```
:::

::: {.cell .code execution_count="144" dc="{\"key\":\"18\"}" scrolled="true" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
#Declaring these now for later use in the plots
TOP_CAP_TITLE = 'Top 10 market capitalization'
TOP_CAP_YLABEL = '% of total cap'

# Selecting the first 10 rows and setting the index
cap10 = cap[:10].set_index('id')
cap10

# Calculating market_cap_perc
cap10 = cap10.assign(market_cap_perc =
    lambda x: (x.market_cap_usd / cap.market_cap_usd.sum()) * 100)

# Plotting the barplot with the title defined above 
ax = cap10.plot.bar(title=TOP_CAP_TITLE)

# Annotating the y axis with the label defined above
# ... YOUR CODE FOR TASK 4 ...
ax.set_ylabel(TOP_CAP_YLABEL);
```

::: {.output .display_data}
![](vertopal_8c06e6e4427d44f9942c12db40ef30c8/027f07d342cadf294ba1974d202876d191c95175.svg)
:::
:::

::: {.cell .code execution_count="145" dc="{\"key\":\"18\"}" trusted="true"}
``` {.python}
cap10
```

::: {.output .execute_result execution_count="145"}
```{=html}
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>market_cap_usd</th>
      <th>market_cap_perc</th>
    </tr>
    <tr>
      <th>id</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>bitcoin</th>
      <td>2.130493e+11</td>
      <td>56.918669</td>
    </tr>
    <tr>
      <th>ethereum</th>
      <td>4.352945e+10</td>
      <td>11.629410</td>
    </tr>
    <tr>
      <th>bitcoin-cash</th>
      <td>2.529585e+10</td>
      <td>6.758088</td>
    </tr>
    <tr>
      <th>iota</th>
      <td>1.475225e+10</td>
      <td>3.941238</td>
    </tr>
    <tr>
      <th>ripple</th>
      <td>9.365343e+09</td>
      <td>2.502063</td>
    </tr>
    <tr>
      <th>dash</th>
      <td>5.794076e+09</td>
      <td>1.547956</td>
    </tr>
    <tr>
      <th>litecoin</th>
      <td>5.634498e+09</td>
      <td>1.505323</td>
    </tr>
    <tr>
      <th>bitcoin-gold</th>
      <td>4.920065e+09</td>
      <td>1.314454</td>
    </tr>
    <tr>
      <th>monero</th>
      <td>4.331688e+09</td>
      <td>1.157262</td>
    </tr>
    <tr>
      <th>cardano</th>
      <td>3.231420e+09</td>
      <td>0.863312</td>
    </tr>
  </tbody>
</table>
</div>
```
:::
:::

::: {.cell .markdown dc="{\"key\":\"25\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 4. Making the plot easier to read and more informative {#4-making-the-plot-easier-to-read-and-more-informative}

```{=html}
<p>While the plot above is informative enough, it can be improved. Bitcoin is too big, and the other coins are hard to distinguish because of this. Instead of the percentage, let's use a log<sup>10</sup> scale of the "raw" capitalization. Plus, let's use color to group similar coins and make the plot more informative<sup>1</sup>. </p>
```
```{=html}
<p>For the colors rationale: bitcoin-cash and bitcoin-gold are forks of the bitcoin <a href="https://en.wikipedia.org/wiki/Blockchain">blockchain</a><sup>2</sup>. Ethereum and Cardano both offer Turing Complete <a href="https://en.wikipedia.org/wiki/Smart_contract">smart contracts</a>. Iota and Ripple are not minable. Dash, Litecoin, and Monero get their own color.</p>
```
```{=html}
<p><sup>1</sup> <em>This coloring is a simplification. There are more differences and similarities that are not being represented here.</em></p>
```
```{=html}
<p><sup>2</sup> <em>The bitcoin forks are actually <strong>very</strong> different, but it is out of scope to talk about them here. Please see the warning above and do your own research.</em></p>
```
:::

::: {.cell .code execution_count="147" dc="{\"key\":\"25\"}" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
# Colors for the bar plot
COLORS = ['orange', 'green', 'orange', 'cyan', 'cyan', 'blue', 'silver', 'orange', 'red', 'green']

# Plotting market_cap_usd as before but adding the colors and scaling the y-axis  
ax = cap10.market_cap_usd.plot.bar(title=TOP_CAP_TITLE, logy=True, color = COLORS)

# Annotating the y axis with 'USD'
# ... YOUR CODE FOR TASK 5 ...
ax.set_ylabel('USD')
# Final touch! Removing the xlabel as it is not very informative
# ... YOUR CODE FOR TASK 5 ...
ax.set_xlabel('')
```

::: {.output .execute_result execution_count="147"}
    Text(0.5,0,'')
:::

::: {.output .display_data}
![](vertopal_8c06e6e4427d44f9942c12db40ef30c8/c9388da8bf0a75c3ffbdf22a34223e085793d87d.svg)
:::
:::

::: {.cell .markdown dc="{\"key\":\"32\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 5. What is going on?! Volatility in cryptocurrencies {#5-what-is-going-on-volatility-in-cryptocurrencies}

```{=html}
<p>The cryptocurrencies market has been spectacularly volatile since the first exchange opened. This notebook didn't start with a big, bold warning for nothing. Let's explore this volatility a bit more! We will begin by selecting and plotting the 24 hours and 7 days percentage change, which we already have available.</p>
```
:::

::: {.cell .code execution_count="149" dc="{\"key\":\"32\"}" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
# Selecting the id, percent_change_24h and percent_change_7d columns
volatility = dec6[['id', 'percent_change_24h','percent_change_7d']]

# Setting the index to 'id' and dropping all NaN rows
volatility = volatility.set_index('id').dropna()

# Sorting the DataFrame by percent_change_24h in ascending order
volatility = volatility.sort_values('percent_change_24h')

# Checking the first few rows
# ... YOUR CODE FOR TASK 6 ...
volatility.head()
```

::: {.output .execute_result execution_count="149"}
```{=html}
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>percent_change_24h</th>
      <th>percent_change_7d</th>
    </tr>
    <tr>
      <th>id</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>flappycoin</th>
      <td>-95.85</td>
      <td>-96.61</td>
    </tr>
    <tr>
      <th>credence-coin</th>
      <td>-94.22</td>
      <td>-95.31</td>
    </tr>
    <tr>
      <th>coupecoin</th>
      <td>-93.93</td>
      <td>-61.24</td>
    </tr>
    <tr>
      <th>tyrocoin</th>
      <td>-79.02</td>
      <td>-87.43</td>
    </tr>
    <tr>
      <th>petrodollar</th>
      <td>-76.55</td>
      <td>542.96</td>
    </tr>
  </tbody>
</table>
</div>
```
:::
:::

::: {.cell .markdown dc="{\"key\":\"39\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 6. Well, we can already see that things are *a bit* crazy {#6-well-we-can-already-see-that-things-are-a-bit-crazy}

```{=html}
<p>It seems you can lose a lot of money quickly on cryptocurrencies. Let's plot the top 10 biggest gainers and top 10 losers in market capitalization.</p>
```
:::

::: {.cell .code execution_count="151" dc="{\"key\":\"39\"}" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
#Defining a function with 2 parameters, the series to plot and the title
def top10_subplot(volatility_series, title):
    # Making the subplot and the figure for two side by side plots
    fig, axes = plt.subplots(nrows=1, ncols=2, figsize=(10, 6))
    
    # Plotting with pandas the barchart for the top 10 losers
    ax = volatility_series[:10].plot.bar(color="darkred", ax=axes[0])
    
    # Setting the figure's main title to the text passed as parameter
    # ... YOUR CODE FOR TASK 7 ...
    fig.suptitle(title)
    # Setting the ylabel to '% change'
    # ... YOUR CODE FOR TASK 7 ...
    ax.set_ylabel('% change')
    # Same as above, but for the top 10 winners
    ax = ...
    ax = volatility_series[-10:].plot.bar(color="darkblue", ax=axes[1])
    # Returning this for good practice, might use later
    return fig, ax

DTITLE = "24 hours top losers and winners"

# Calling the function above with the 24 hours period series and title DTITLE  
fig, ax =  top10_subplot(volatility.percent_change_24h, DTITLE)
```

::: {.output .display_data}
![](vertopal_8c06e6e4427d44f9942c12db40ef30c8/99b2e03c6c3d132d961754e61764f4ef25d81e7f.svg)
:::
:::

::: {.cell .markdown dc="{\"key\":\"46\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 7. Ok, those are\... interesting. Let\'s check the weekly Series too. {#7-ok-those-are-interesting-lets-check-the-weekly-series-too}

```{=html}
<p>800% daily increase?! Why are we doing this tutorial and not buying random coins?<sup>1</sup></p>
```
```{=html}
<p>After calming down, let's reuse the function defined above to see what is going weekly instead of daily.</p>
```
```{=html}
<p><em><sup>1</sup> Please take a moment to understand the implications of the red plots on how much value some cryptocurrencies lose in such short periods of time</em></p>
```
:::

::: {.cell .code execution_count="153" dc="{\"key\":\"46\"}" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
# Sorting percent_change_7d in ascending order
volatility7d = volatility.sort_values("percent_change_7d")

WTITLE = "Weekly top losers and winners"

# Calling the top10_subplot function
fig, ax = top10_subplot(volatility7d.percent_change_7d, WTITLE);


```

::: {.output .display_data}
![](vertopal_8c06e6e4427d44f9942c12db40ef30c8/b9fa12db95bc2b77c22c9072c1213875349ac4ee.svg)
:::
:::

::: {.cell .markdown dc="{\"key\":\"53\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 8. How small is small? {#8-how-small-is-small}

```{=html}
<p>The names of the cryptocurrencies above are quite unknown, and there is a considerable fluctuation between the 1 and 7 days percentage changes. As with stocks, and many other financial products, the smaller the capitalization, the bigger the risk and reward. Smaller cryptocurrencies are less stable projects in general, and therefore even riskier investments than the bigger ones<sup>1</sup>. Let's classify our dataset based on Investopedia's capitalization <a href="https://www.investopedia.com/video/play/large-cap/">definitions</a> for company stocks. </p>
```
```{=html}
<p><sup>1</sup> <em>Cryptocurrencies are a new asset class, so they are not directly comparable to stocks. Furthermore, there are no limits set in stone for what a "small" or "large" stock is. Finally, some investors argue that bitcoin is similar to gold, this would make them more comparable to a <a href="https://www.investopedia.com/terms/c/commodity.asp">commodity</a> instead.</em></p>
```
:::

::: {.cell .code execution_count="155" dc="{\"key\":\"53\"}" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
# Selecting everything bigger than 10 billion 
largecaps = cap.query("market_cap_usd > 1E+10")

# Printing out largecaps
largecaps
```

::: {.output .execute_result execution_count="155"}
```{=html}
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>market_cap_usd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>bitcoin</td>
      <td>2.130493e+11</td>
    </tr>
    <tr>
      <th>1</th>
      <td>ethereum</td>
      <td>4.352945e+10</td>
    </tr>
    <tr>
      <th>2</th>
      <td>bitcoin-cash</td>
      <td>2.529585e+10</td>
    </tr>
    <tr>
      <th>3</th>
      <td>iota</td>
      <td>1.475225e+10</td>
    </tr>
  </tbody>
</table>
</div>
```
:::
:::

::: {.cell .markdown dc="{\"key\":\"60\"}" deletable="false" editable="false" run_control="{\"frozen\":true}" tags="[\"context\"]"}
## 9. Most coins are tiny {#9-most-coins-are-tiny}

```{=html}
<p>Note that many coins are not comparable to large companies in market cap, so let's divert from the original Investopedia definition by merging categories.</p>
```
```{=html}
<p><em>This is all for now. Thanks for completing this project!</em></p>
```
:::

::: {.cell .code execution_count="157" dc="{\"key\":\"60\"}" tags="[\"sample_code\"]" trusted="true"}
``` {.python}
# Making a nice function for counting different marketcaps from the
# "cap" DataFrame. Returns an int.
# INSTRUCTORS NOTE: Since you made it to the end, consider it a gift :D
def capcount(query_string):
    return cap.query(query_string).count().id

# Labels for the plot
LABELS = ["biggish", "micro", "nano"]

# Using capcount count the biggish cryptos
biggish = capcount("market_cap_usd > 3E+8")

# Same as above for micro ...
micro = capcount("market_cap_usd >= 5E+7 & market_cap_usd < 3E+8")

# ... and for nano
nano =  capcount("market_cap_usd < 5E+7")

# Making a list with the 3 counts
values = [biggish, micro, nano]

# Plotting them with matplotlib 
# ... YOUR CODE FOR TASK 10 ...
plt.bar(range(len(values)), values, tick_label=LABELS);
```

::: {.output .display_data}
![](vertopal_8c06e6e4427d44f9942c12db40ef30c8/f5ea798e68c71022dfcaef5b8b0107132d0694ba.svg)
:::
:::
