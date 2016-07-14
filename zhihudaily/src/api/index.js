import { NewsResource,NewsIdResource,NewsDateResource } from './resource'

export default {
	getNews() {
		return NewsResource.get()
	},
	getNewsById(id) {
		return NewsIdResource.get({id: id})
	},
	getNewsByDate(date) {
		return NewsDateResource.get({date: date})
	}
}