with open('src/components/WalletSection.jsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace("\\'", "'")

with open('src/components/WalletSection.jsx', 'w', encoding='utf-8') as f:
    f.write(c)
