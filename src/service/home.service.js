const connection = require('../app/database')

class HomeService {
    async swiperlist() {
        const statement = 'SELECT title,filename,createTime,creater FROM `swiper`;'
        const [result] = await connection.execute(statement)
        return result
    }
    async swiperadd(title,filename,creater) {
        const statement = 'INSERT INTO `swiper` (title,filename,creater) VALUES (?,?,?);'
        const [result] = await connection.execute(statement, [title,filename,creater])
        return result
    }
    async swiperdelete(id) {
        const statement = 'DELETE FROM `swiper` WHERE id = ?;'
        const [result] = await connection.execute(statement, [id])
        return result
    }
    async swiperupdate(id,title,filename,creater) {
        const statement = 'UPDATE `swiper` SET title = ?,filename = ?,creater = ? WHERE id = ?;'
        const [result] = await connection.execute(statement, [title,filename,creater,id])
        return result
    }
}

module.exports = new HomeService();