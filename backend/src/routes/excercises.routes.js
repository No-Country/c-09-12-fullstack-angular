const {Router}=require('express')
const { getExcercises, getById, putExcercises, postExcercises, deleteExcercises } = require('../controllers/excercises.controllers')
const authenticate = require('../middlewares/auth.middleware')

const ExcerciseRouter = Router()
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     A_excercises:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Tony
 *         muscle: 
 *           type: string
 *           example: femorales y pantorrillas
 *         repeat: 
 *           type: int
 *           example: 10
 *         weight: 
 *           type: double
 *           example: 58,
 *         time: 
 *           type: string
 *           example: media hora,
 *         rutineId: 
 *           type: int
 *           example: 1
 *     Excercise:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Tony
 *         muscle: 
 *           type: string
 *           example: femorales y pantorrillas
 * 
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     addExcercise:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Tony
 *         muscle: 
 *           type: string
 *           example: femorales y pantorrillas
 *         repeat: 
 *           type: int
 *           example: 10
 *         weight: 
 *           type: double
 *           example: 58,
 *         time: 
 *           type: string
 *           example: media hora,
 *         rutineId: 
 *           type: int
 *           example: 1
 *     showExcercise:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Tony
 *         muscle: 
 *           type: string
 *           example: femorales y pantorrillas
 * 
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     changeExcercise:
 *       type: object
 *       properties:
 *         rol:
 *           type: string
 *           example: client         
 */


/**
* @openapi
* /api/v1/excercises:
*   get:
*     summary: Get all excercises
*     tags: [Excercises]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items: {}
*   
*/

/**
 * @openapi
 * /api/v1/excercises/{id}:
 *   get:
 *     summary: Get excercise by id
 *     tags: [Excercises]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 *   
 */

/**
 * @openapi
 * /api/v1/excercises:
 *   post:
 *     summary: post a excercise into the app
 *     tags: [Excercises]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: To register a new user you need a some parameters, for example
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/addExcercise"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/showExcercise"
 *     
 *
 */

/**
* @openapi
* /api/v1/excercises/{id}:
*   put:
*     summary: update excercise by id
*     tags: [Excercises]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*           minimum: 1
*         description: user id
*     requestBody:
*       description: To update a user you need a some parameters, for example
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/A_excercises"
*     responses:
*       201:
*         description: OK
*
*/



/**
 * @openapi
 * /api/v1/excercises/{id}:
 *   delete:
 *     summary: Delete excercise by id
 *     tags: [Excercises]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: publication id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 *   
 */

ExcerciseRouter.get('/excercises', authenticate, getExcercises)
ExcerciseRouter.get('/excercises/:id', authenticate, getById)
ExcerciseRouter.put('/excercises/:id', authenticate, putExcercises)
ExcerciseRouter.post('/excercises', authenticate, postExcercises)
ExcerciseRouter.delete('/excercises/:id', authenticate, deleteExcercises)


module.exports = ExcerciseRouter