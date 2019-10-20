try {
    if (Math.random() > 0.5) throw new Error('Erro')
} catch (e) {
    console.log('Valor maior que 0.5!')
} 