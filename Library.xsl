<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
            div
            {
                text-align:center;
                width: 100%;
                
            }
            td,th
            {
                font-size:larger;
                padding:25px;
                text-align:center !important;
            }
                </style>
            </head>
            <body>
                <h1 style="text-align:center;"></h1>
                <div class='Books' style="float:left;">
                    <table border="2" align="">
                        <tr bgcolor="white">
                            <th style="text-align:left">Title</th>
                            <th style="text-align:left">Author</th>
                            <th style="text-align:left">ISBN</th>
                            <th style="text-align:left">Price</th>
                        </tr>
                        <xsl:for-each select="Library/Book">
                            <tr>
                                <td>
                                    <xsl:value-of select="Title"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Author"/>
                                </td>
                                <td>
                                    <xsl:value-of select="ISBN"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Price"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
